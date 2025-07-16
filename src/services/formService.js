import { FORM_SUBMISSION } from '../config/formConfig';

export class FormService {
  static async submitForm(formData) {
    try {
      // Log to console for now (can be replaced with API call)
      console.log(FORM_SUBMISSION.CONSOLE_LOG_PREFIX, formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 100));
      
      return {
        success: true,
        message: FORM_SUBMISSION.SUCCESS_MESSAGE,
      };
    } catch (error) {
      return {
        success: false,
        message: 'An error occurred while submitting the form.',
        error,
      };
    }
  }
} 