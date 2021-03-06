import HomePageStyled from "./HomePageStyled";
import {useNavigate} from "react-router-dom";
import useDeviceSizes from "../hooks/useDeviceSizes";

const HomePage = () => {
    const {isMobileDevice} = useDeviceSizes();
    const navigate = useNavigate()
    return (
        <HomePageStyled>
            {isMobileDevice ? <>
                    <p className='homePageInstruction'>В связи с проведением Специальной военной операции в Украине, к нашему
                    волонтерскому движению все чаще обращаются люди, которые не могут найти родных и близких из числа
                    военных, гражданских и служащих, задействованных в ее проведении.</p>
                    <p className='homePageInstruction'> Заполнив простые формы Вы дадите нам возможность
                        помочь найти человека, а может и спасти. Не нужно ждать - заполняем!</p>
                </>
                : <>
                    <p className='homePageInstruction'>В связи с проведением Специальной военной операции в Украине, к
                        нашему
                        волонтерскому движению все чаще обращаются люди, которые не могут найти родных и близких из
                        числа
                        военных, гражданских и служащих, задействованных в ее проведении. Мы не хотим остаться
                        равнодушными к
                        чужому несчастью и
                        собственными силами пытаемся всячески помочь вернуть наших миротворцев, наших защитников и
                        героев.</p>
                    <p className='homePageInstruction'>Если Ваш сын, отец, муж или просто знакомый, не
                        выходит
                        на связь или Вы не знаете где он находится, Вы можете смело рассчитывать на нашу помощь. Мы
                        постараемся
                        сделать все возможное, чтобы дать Вам хоть какую-нибудь информацию.
                    </p>
                    <p className='homePageInstruction'>На нашем ресурсе Вы можете оставить информацию об интересующем
                        Вас
                        человеке. Запрос на добавление очень прост. Вам достаточно выполнить всего три шага. Заполнить
                        форму о
                        человеке и заполнить контактные данные кому необходимо передать найденную информацию. Для этого
                        нажмите
                        кнопку ниже или выберите пункт "Поиск" в панели навигации и следуйте инструкциям.</p>
                </>}
            <button type='button' onClick={() => navigate('/search')}
                    className='homePageRedirectButton'>Начать поиск
            </button>
        </HomePageStyled>
    )
}

export default HomePage