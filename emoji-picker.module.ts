import {NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule} from '@angular/material';

import {EmojiInputComponent} from './src/emoji-input/emoji-input.component';
import {EmojiService} from './src/emoji.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmojiInputComponent
  ],
  providers: [
    EmojiService
  ],
  exports: [
    EmojiInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmojiPickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmojiPickerModule,
      providers: [
        EmojiService
      ]
    };
  }
}
