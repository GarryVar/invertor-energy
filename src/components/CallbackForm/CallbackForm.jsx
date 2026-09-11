function CallbackForm() {
    return (
        <div
            id="modal"
            style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);justify-content:center;align-items:center;z-index:100;"
        >
            <div style="background:#fff;padding:40px;border-radius:15px;position:relative;max-width:500px;width:90%;text-align:center;">
                <span
                    onclick="closeModal()"
                    style="position:absolute;top:15px;right:20px;font-size:1.5rem;cursor:pointer;"
                >
                    ×
                </span>
                <h3>Оставьте телефон для точного расчета</h3>
                <p>Инженер перезвонит и подберет мощность именно под вашу нагрузку.</p>
                <form onsubmit="handleSubmit(event)" style="margin-top:20px;">
                    <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        style="width:100%;padding:15px;border:1px solid #ccc;border-radius:8px;margin-bottom:15px;"
                    />
                    <textarea
                        placeholder="Кратко опишите проблему (например: часто выбивает свет, нужен ИБП для газового котла)"
                        style="width:100%;padding:15px;border:1px solid #ccc;border-radius:8px;margin-bottom:15px;"
                    ></textarea>
                    <button
                        type="submit"
                        style="width:100%;padding:15px;background:#1e90ff;color:#fff;border:none;border-radius:8px;font-weight:bold;"
                    >
                        Получить смету
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CallbackForm;
