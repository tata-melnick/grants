import React from "react"
import styles from "./description.module.css"
import { GrantType } from "../../../../types"

interface IDescriptionProps {
    grant: GrantType
    id?: string
}

const Description: React.FC<IDescriptionProps> = ({ grant }) => {
    const { lots, endTime } = grant

    return (
        <div id="description">
            <h3 className={styles.title}>Основные сведения о гранте</h3>
            <div className={styles.description}>
                <div>
                    Фонд содействия инновациям объявляет о начале отбора
                    проектов по конкурсу «УМНИК – Проектная команда.
                    Электроника» (очередь II) в рамках выполнения результата
                    федерального проекта «Прикладные исследования, разработка и
                    внедрение электронной продукции». Основные условия конкурса,
                    требования к участникам и рекомендации по подготовке заявки
                    представлены на слайдах.
                </div>
                <div>
                    Конкурс направлен на отбор проектов по следующим
                    направлениям (лотам):
                    <ol className={styles.lots}>
                        {lots.map((item, index) => (
                            <li key={index}>
                                {item.description}
                                {item.subLots && (
                                    <ul className={styles.subLots}>
                                        {item.subLots.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
                <p>
                    Обращаем внимание, что подача заявок осуществляется через
                    систему АС Фонд-М по адресу: https://online.fasie.ru Конкурс
                    «УМНИК – Проектная команда. Электроника» (очередь II)
                    ориентирован на поддержку проектов, выполняемых научными
                    коллективами (далее – проектная команда), стремящимися
                    разработать новые решения в сфере электронной и
                    радиоэлектронной промышленностей.
                </p>
                <div>
                    Основные параметры предоставляемой поддержки:
                    <ul className={styles.list}>
                        <li>
                            размер гранта – 3 000 000 рублей, при этом:
                            <ul className={styles.listTwo}>
                                <li>
                                    объем средств, предоставляемый одному
                                    физическому лицу, являющемуся членом
                                    проектной команды, должен составлять не
                                    более 1 000 000 рублей;
                                </li>
                                <li>
                                    объем средств, предоставляемый физическому
                                    лицу, являющемуся научным руководителем
                                    проектной команды, должен составлять не
                                    более 300 000 рублей;
                                </li>
                                <li>
                                    объем расходов по оплате услуг организации,
                                    оказывающей инфраструктурную поддержку для
                                    выполнения Проекта, должен составлять не
                                    более 300 000 рублей;
                                </li>
                            </ul>
                        </li>

                        <li>
                            направление поддержки – поддержка коллективов
                            студентов и(или) молодых ученых, занимающихся
                            исследованиями в сфере электронной и
                            радиоэлектронной промышленностей, в том числе
                            связанными с разработкой материалов,
                            технологического оборудования и программного
                            обеспечения;
                        </li>
                        <li>
                            направление поддержки – поддержка коллективов
                            студентов и(или) молодых ученых, занимающихся
                            исследованиями в сфере электронной и
                            радиоэлектронной промышленностей, в том числе
                            связанными с разработкой материалов,
                            технологического оборудования и программного
                            обеспечения;
                        </li>
                        <li>
                            плановый срок выполнения работ – {endTime} месяцев.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Description
