import {editor} from 'pageflow-scrolled/editor';
import {ColorInputView, FileInputView} from 'pageflow/editor';
import {
  CheckBoxInputView, SelectInputView, SliderInputView, TextInputView
} from 'pageflow/ui';

editor.contentElementTypes.register('inlineBeforeAfter', {
  configurationEditor() {
    this.tab('general', function() {
      this.input('before_id', FileInputView, {
        collection: 'image_files',
        fileSelectionHandler: 'contentElementConfiguration',
        positioning: false,
      });
      this.input('before_label', TextInputView);
      this.input('after_id', FileInputView, {
        collection: 'image_files',
        fileSelectionHandler: 'contentElementConfiguration',
        positioning: false,
      });
      this.input('after_label', TextInputView);
      this.input('initial_slider_position', SliderInputView);
      this.input('slider', CheckBoxInputView);
      this.input('slider_handle', CheckBoxInputView, {
        visibleBinding: 'slider',
      });
      this.input('slider_color', ColorInputView, {
        visibleBinding: 'slider',
      });
      this.input('position', SelectInputView, {
        attributeTranslationKeyPrefixes: ['pageflow_scrolled.editor.inputs'],
        values: ['inline', 'sticky', 'full']
      });
    });
  },
  defaultConfig: {slider: true, slider_handle: true, initial_slider_position: 50},
});
