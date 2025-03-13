import React from "react"
import styles from "./requirements.module.css"

const Requirements: React.FC = () => {
    return (
        <div>
            <h3 className={styles.title}>Требования для участия</h3>
            <div className={styles.description}>
                <p>
                    В конкурсе могут принимать участие коллективы, состоящие из
                    физических лиц (проектные команды), являющихся гражданами
                    Российской Федерации. В состав проектной команды входят от 3
                    до 5 физических лиц в возрасте от 18 до 35 лет и научный
                    руководитель.
                </p>
                <p>
                    Выполнение проекта осуществляется при участии научного
                    руководителя – сотрудника образовательной организации
                    высшего профессионального образования или научной
                    организации, обладающего подтвержденной квалификацией не
                    ниже кандидата наук по специальности, связанной с
                    направлением проекта.
                </p>
                <p>
                    Члены проектной команды не должны одновременно участвовать
                    (выступать руководителем малого предприятия, научным
                    руководителем) в других проектах, финансируемых Фондом в
                    настоящее время (исключение – завершающиеся договоры по
                    программам «Студенческий стартап» и «Акселерация-ИИ»). На
                    рассмотрении в Фонде от одного заявителя может находиться
                    только одна заявка на Конкурс.
                </p>
                <p>
                    Физическое лицо, являющееся членом проектной команды, может
                    участвовать в составе одной проектной команды (одной
                    заявки). Физическое лицо, являющееся научным руководителем
                    проектной команды, может состоять в составе проектной
                    команды в качестве научного руководителя в других заявках,
                    поданных на Конкурс. Допускается участие научного
                    руководителя не более чем в 3 заявках. Научный руководитель
                    не может выступать в качестве заявителя.
                </p>
            </div>
        </div>
    )
}

export default Requirements
