export const maxLength = (filed,max) => `${filed} باید  حداکثر ${max} حرف باشد`;
export const minLength = (filed,max) => `${filed} باید حد اقل ${max} حرف باشد`;

export const formatInCorrect = (filed) => `وارد شده صحیح نمیباشد ${filed} فرمت`;

export const isRequired = "این فیلد اجباری میباشد";
//format faild
export const emailFormat = formatInCorrect("ایمیل");
export const usernameFortam = formatInCorrect("نام کاربری");
export const passwordFortam = formatInCorrect("رمز عبور");
export const firstnameFortam = formatInCorrect("نام");
export const lastnameFortam = formatInCorrect("نام خانوادگی");
export const phonenumberFortam = formatInCorrect("شماره تلفن");
export const birthDate = formatInCorrect("تاریخ تولد");
