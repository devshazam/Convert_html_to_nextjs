import Link from 'next/link';

export function FooterForm() {
    return (
        <>
            <div className="container">
                <div
                    id="form"
                    className="b-form b-form_mainpage b-form--mainpage js-form"
                >
                    <div className="form__inner">
                        <form
                            method="post"
                            action="https://formspree.io/f/mlekkdza"
                        >
                            <div className="b-form-range js-form-range">
                                <div className="form-range__title">
                                    Оставьте заявку
                                </div>
                                <div className="form-range__text">
                                    Укажите примерную сумму, которую планируете
                                    на реализацию проекта
                                </div>
                                <div className="form-range__price-input">
                                    <div className="field">
                                        {" "}
                                        <span>от</span>
                                        <input
                                            type="number"
                                            name="from"
                                            className="input-min"
                                            defaultValue="5 000"
                                        />{" "}
                                        <span>руб.</span>{" "}
                                    </div>
                                    <div className="field">
                                        {" "}
                                        <span>до</span>
                                        <input
                                            type="number"
                                            name="to"
                                            className="input-max"
                                            defaultValue="100 000"
                                        />{" "}
                                        <span>руб.</span>{" "}
                                    </div>
                                </div>
                            </div>

                            <div className="form__content">
                                <div className="form__col-1-3 form__label-none form__col-nopad">
                                    {" "}
                                    <label className="form__label">
                                        ФИО <ins className="form__mark">*</ins>
                                    </label>
                                    <div className="form__inputwrap">
                                        <input
                                            defaultValue="Иванов И.И."
                                            type="text"
                                            name="fio"
                                            placeholder="ФИО"
                                        />
                                    </div>
                                    <p className="form__info"></p>
                                </div>
                                <div className="form__col-1-3 form__label-none form__col-nopad">
                                    {" "}
                                    <label className="form__label">
                                        Телефон{" "}
                                        <ins className="form__mark">*</ins>
                                    </label>
                                    <div className="form__inputwrap">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Телефон"
                                            defaultValue="+712345678"
                                        />{" "}
                                    </div>
                                    <p className="form__info"></p>
                                </div>
                                <div className="form__col-1-3 form__label-none form__col-nopad">
                                    {" "}
                                    <label className="form__label">
                                        E-mail{" "}
                                        <ins className="form__mark">*</ins>
                                    </label>
                                    <div className="form__inputwrap">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            defaultValue="qwerty@mail.ru"
                                        />
                                    </div>
                                    <p className="form__info"></p>
                                </div>
                                <div className="form__col-1 form__label-none form__col-nopad">
                                    {" "}
                                    <label className="form__label">
                                        Укажите сферу бизнеса, регион работы,
                                        адрес действующего сайта и витрины
                                    </label>
                                    <div className="form__inputwrap">
                                        {" "}
                                        <textarea
                                            defaultValue="Описание ..."
                                            name="comment"
                                            placeholder="Укажите сферу бизнеса, регион работы, адрес действующего сайта и витрины"
                                        ></textarea>
                                    </div>
                                    <p className="form__info"></p>
                                </div>
                                <div className="form__line">
                                    <div className="form__col-1 form__col-btn">
                                        {" "}
                                        <button
                                            type="submit"
                                            className="b-btnbox js-submit"
                                        >
                                            Отправить
                                        </button>{" "}
                                    </div>
                                    <div className="form__label">
                                        Нажимая кнопку «Отправить», вы даете
                                        согласие на обработку персональных
                                        данных согласно
                                        <Link
                                            href="#"
                                            className="disabled"
                                            rel="nofollow"
                                            target="_blank"
                                        >
                                            Политике конфиденциальности
                                        </Link>{" "}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
