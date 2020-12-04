const validator = {
  email: [v => !!v || '이메일 입력이 필요합니다.', v => /.+@.+/.test(v) || '유효한 이메일을 입력해주세요'],
  name: [v => !!v || '이름 입력이 필요합니다.', v => v.length > 1 || '이름은 최소 2글자 이상이어야 합니다.'],
  password: [v => !!v || '비밀번호 입력이 필요합니다.', v => v.length > 1 || '비밀번호는 최소 4글자 이상이어야 합니다.'],
  text: [v => !!v || '입력이 필요합니다.', v => v.length > 1 || '최소 2글자 이상이어야 합니다.']
}

export default validator

export const isEmptyArray = v => !!v && Array.isArray(v) && v.length === 0
export const isEmptyString = v => typeof v === 'string' && v.length === 0
export const isLastIndex = (v, length) => typeof v === 'number' && v === length - 1
