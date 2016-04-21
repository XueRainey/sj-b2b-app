import {Page} from 'ionic-angular';
import {
  CORE_DIRECTIVES,
	FORM_DIRECTIVES,
	FormBuilder,
	ControlGroup,
	Control,
	Validators,
	AbstractControl } from 'angular2/common'

@Page({
  templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {
  registerForm:any;
  phone:AbstractControl;
  password:AbstractControl;
  code:AbstractControl;
  isPasswordSee:boolean = false;
  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      phone: ["", Validators.compose([
        Validators.pattern('(^(13\\d|15[^4,\\D]|17[13678]|18\\d)\\d{8}|170[^346,\\D]\\d{7})$'),
        Validators.required
      ])],
      code:["",Validators.required],
      password: ["", Validators.compose([
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)[A-Za-z\\d$@$!%*?&]{6,20}'),
        Validators.required
      ])]
    });
    this.phone = this.registerForm.controls['phone'];
    this.code = this.registerForm.controls['code'];
    this.password = this.registerForm.controls['password'];
  }

  doRegister(value){
    let error_message="请检查表单！";
    if(!this.registerForm.valid){
      console.log(this.registerForm.hasError('minLength', 'password'));
      if(!this.phone.valid){
        error_message = "请输入正确的手机号！";
      }else{
        if(!this.code.valid){
          error_message ="请输入验证码！";
        }else{
          if(this.registerForm.hasError('required','password')){
            error_message = "请输入密码！";
          }else{
            error_message ="密码应为英文和数字结合的6-20位字符组合！";
          }
        }
      }
      window.plugins&&window.plugins.toast.showShortCenter(error_message);

      // console.log(error_message);
    }else{
      console.log("调用注册！");
    }

  }

  changePasswordType(){

    this.isPasswordSee = !this.isPasswordSee;
  }

  getCode(){
    if(!this.phone.valid){
      window.plugins&&window.plugins.toast.showShortCenter("请输入正确的手机号码！");
    }
    // console.log("获取验证码");
  }

}
