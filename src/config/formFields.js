export const FORM_FIELDS = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
  },
  {
    id: 'phoneNumber',
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
    mask: '(000) 000-0000',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
  },
  {
    id: 'costGuess',
    name: 'costGuess',
    label: "Guess the Air Fryer's Cost ($)",
    type: 'number',
  },
  {
    id: 'spidrPin',
    name: 'spidrPin',
    label: 'Secret 16-Digit Spidr PIN',
    type: 'text',
    mask: '0000-0000-0000-0000',
  },
]; 