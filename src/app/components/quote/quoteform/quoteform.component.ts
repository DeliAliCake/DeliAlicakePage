import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as quoteFormFields from '../../../helpers/quoteform-fields';

@Component({
  selector: 'quote-form',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.scss'],
})
export class QuoteformComponent {
  formQuote!: FormGroup;

  cakeTypeOptions = quoteFormFields.cakeTypeOptions;
  cakeSizeOptions = quoteFormFields.cakeSizeOptions;
  cakeBaseFlavorOptions = quoteFormFields.cakeBaseFlavorOptions;
  validationsOptions = quoteFormFields.validationsOptions;
  coverageFlavorOptions = quoteFormFields.coverageFlavorOptions;
  filledFlavorOptions = quoteFormFields.filledFlavorOptions;

  dropdownClass = 'quote-form-input';
  withCoverage: boolean = false;
  withFilled: boolean = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formQuote = this.formBuilder.group({
      cakeType: ['', Validators.required],
      cakeSize: ['', Validators.required],
      cakeBaseFlavor: ['', Validators.required],
      withCoverage: ['', Validators.required],
      withFilled: ['', Validators.required],
      coverageFlavor: [''],
      filledFlavor: [''],
    });
    this.formQuote.get('withCoverage')?.valueChanges.subscribe((option) => {
      setTimeout(() => {
        this.onChangeOption(option, 'coverage');
      }, 1);
    });
    this.formQuote.get('withFilled')?.valueChanges.subscribe((value) => {
      setTimeout(() => {
        this.onChangeOption(value);
      }, 1);
    });
  }

  onChangeOption(option: any, field: string = 'filled'): void {
    if (field == 'filled') {
      this.withFilled = option.value;
      const filledFlavorControl = this.formQuote.get('filledFlavor');
      if (option.value) {
        filledFlavorControl?.setValidators([Validators.required]);
      } else {
        filledFlavorControl?.clearValidators();
      }
    } else {
      this.withCoverage = option.value;
      const coverageFlavorControl = this.formQuote.get('coverageFlavor');
      if (option.value) {
        coverageFlavorControl?.setValidators([Validators.required]);
      } else {
        coverageFlavorControl?.clearValidators();
      }
    }

    setTimeout(() => {
      this.formQuote.updateValueAndValidity();
    }, 1);
  }

  sendInfo(): void {
    console.log(this.formQuote.value);
  }
}
