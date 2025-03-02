import Image from 'next/image'
import './inputField.css'
const InputField = ({ label, name, type = "text", iconSrc, register,defaultValue }) => {
  return (
   <div className="editProfile-inputBox">
      <h5 className="editProfile-inputHeading">{label}</h5>
      <div className="editProfile-input">
        <Image src={iconSrc} alt={`${label} Icon`} width={22} height={22} />
        <span>|</span>
        <input
          type={type}
          className="editProfile-inputField"
          placeholder={label}
          defaultValue={defaultValue}
          {...register(name)}
        />
      </div>
    </div>
  )
}

export default InputField