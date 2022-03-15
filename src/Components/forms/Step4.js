import {Step4Styled} from "./Step4Styled";
import {addTargetOperation} from "../../store/find/findOperations";
import {useDispatch} from "react-redux";

const Step4 = ({setNumber}) => {
    const dispatch = useDispatch();

    const submitData = async () => {
        await dispatch(addTargetOperation());
        setNumber(1);
    }
    return (
        <Step4Styled>
            <p className='step4Instruction'>Мы благодарим Вас за те данные, которые Вы предоставили и ценим Вашу заботу
                о друзьях, родных и близких. Очень надеемся на то, что данные, которыми мы теперь располагаем позволят
                нам найти указанного человека. Мы гарантируем конфиденциальность и постараемся оправдать Ваши
                ожидания.</p>
            <p className='step4Instruction'>Ожидайте сообщение по указанному вами контакту.</p>
            <button type='button' onClick={submitData} className='homePageRedirectButton'>Новый поиск</button>
        </Step4Styled>
    )
}

export default Step4