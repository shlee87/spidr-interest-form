export const FORM_FIELDS = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
  },
  {
    id: 'phoneNumber',
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
    mask: '(000) 000-0000',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
  },
  {
    id: 'costGuess',
    name: 'costGuess',
    label: "Guess the Air Fryer's Cost ($)",
    type: 'number',
    required: false,
  },
  {
    id: 'spidrPin',
    name: 'spidrPin',
    label: 'Secret 16-Digit Spidr PIN',
    type: 'text',
    mask: '0000-0000-0000-0000',
    required: false,
  },
];

export const FORM_SUBMISSION = {
  SUCCESS_MESSAGE: 'Thank you! Your information has been logged to the console.',
  CONSOLE_LOG_PREFIX: 'Form Data Submitted:',
}; 