export const PATTERN ={
  EMAIL_PATTERN:'^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$',
  PASSWORD_PATTERN:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&`~:^])[A-Za-z\d@$!%*#?&`~:^]{8,16}$/,
  ONLY_NUMBER: /^\d+$/,
  FIRST_NAME:/^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  // FIRST_NAME:/^[a-zA-Z ]{3,25}$/,

  // LAST_NAME:/^[a-zA-Z ]{3,25}$/,
  LAST_NAME:/^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  // PHONE_NUMBER:/^\d+$/
  PHONE_NUMBER:/^(?:(?:\+{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
  phone: /^[0-9]+$/,


}




