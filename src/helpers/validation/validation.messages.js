
//format faild

export const messageObj = (message) => ({ message });

export const minLength = (filed, max) => messageObj(`${filed} باید حد اقل ${max} حرف باشد`);
export const strickengthNumeric = (filed, max) => messageObj(`${filed} ${max} رقم می باشد`);
export const maxLength = (filed, max) => messageObj(`${filed} باید  حداکثر ${max} حرف باشد`);
export const formatInCorrect = (filed) => `وارد شده صحیح نمیباشد ${filed} فرمت`;
export const isRequeredField = (field) => messageObj(`فیلد ${field} اجباری میباشد`);
export const dateDistanceFormat = (d) => `تاریخ ${d} تر از زمان حال است`
export const isRequired = "این فیلد اجباری میباشد";
export const emailFormat = messageObj(formatInCorrect("ایمیل"));
export const usernameFortam = messageObj(formatInCorrect("نام کاربری"));
export const passwordFortam = messageObj(formatInCorrect("گذرواژه"));
export const firstnameFortam = messageObj(formatInCorrect("نام"));
export const lastnameFortam = messageObj(formatInCorrect("نام خانوادگی"));
export const nationalIdFortam = messageObj(formatInCorrect("کد ملی"));
export const phonenumberFortam = messageObj(formatInCorrect("شماره تلفن"));
export const birthDate = messageObj(formatInCorrect("تاریخ تولد"));
export const datePattern = messageObj(formatInCorrect("تاریخ"));
export const dateIsGrater = messageObj(dateDistanceFormat("جلوتر"));
export const dateIsLesser = messageObj(dateDistanceFormat("عقب تر"));
