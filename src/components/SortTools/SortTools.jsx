import React from "react";
import s from "./SortTools.module.css";

export default function SortTools(props) {
    return (
        <div className={s.sort_tools}>
            <div className={s.element}>
                <span>Sorting:</span>
                <span>Reversed:</span>
            </div>
            <div className={s.element}>
                <div>
                    <select onChange={(e) => props.setTypeSort(e.target.value)}>
                        <option>By id</option>
                        <option>By title</option>
                        <option>By body</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" onChange={(e) => props.setReversed(e.target.checked)} />
                </div>
            </div>
        </div>
    )
}