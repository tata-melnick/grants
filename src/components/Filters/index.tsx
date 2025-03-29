import React from "react"
import styles from "./filters.module.css"
import Checkbox from "../Checkbox"
import Radio from "../Radio"
import { Calendar } from "../Calendar"
import { observer } from "mobx-react-lite"
import Grants from "../../store/grant"

const Filters: React.FC = observer(() => {
    const { filters, activeFilters, changeFilter } = Grants

    const onChange = (key: string, checked: boolean, value: string) => {
        if (checked) changeFilter(key, [...activeFilters[key], value])
        else
            changeFilter(
                key,
                activeFilters[key].filter((el) => el !== value)
            )
    }

    return (
        <div className={styles.sections}>
            {Object.entries(filters).map(([key, { type, title, items }]) => (
                <div key={title} className={styles.section}>
                    <h3 className={styles.titleSection}>{title}</h3>
                    <div className={styles.filter}>
                        {[...items.values()].sort().map((value) => (
                            <React.Fragment key={value}>
                                {type === "r" ? (
                                    <Radio
                                        value={value}
                                        checked={activeFilters[key].includes(
                                            value
                                        )}
                                        onChange={(value) =>
                                            changeFilter(key, [value])
                                        }
                                    />
                                ) : (
                                    <Checkbox
                                        value={value}
                                        checked={activeFilters[key].includes(
                                            value
                                        )}
                                        onChange={(checked, value) =>
                                            onChange(key, checked, value)
                                        }
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ))}
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Период подачи заявок</h3>
                <Calendar type="range" />
            </div>
        </div>
    )
})

export default Filters
