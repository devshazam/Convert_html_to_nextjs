import Link from 'next/link';

export function HeaderMenu() {
    return (
        <>
            <div className="container">
                <div className="b-sandwich js-sidebar-show show-on-tablet show-on-mobile"> <img
                        src="/files/110/sandwich.png" alt="" /> </div>
                <div className="b-pilot">
                    <div className="b-logo " ><Link href="/"><img className="logo__image"
                                src="/files/1/logo.png" /></Link> </div>
                    <div className="pilot__1 hide-on-tablet hide-on-mobile">
                        <p className="pilot__btn hide-on-mobile"><Link className="header_button callback"
                                 href="/#form">Заказать услуги</Link></p>
                    </div>
                    <div className="pilot__2 hide-on-tablet hide-on-mobile">
                        <p className="pilot__icons hide-on-tablet hide-on-mobile"><Link 
                                href="#form"  rel="nofollow"><img src="/files/110/icon-phone2.png" /> Служба
                                поддержки</Link></p>
                    </div>
                    <div className="pilot__3 hide-on-tablet hide-on-mobile">
                        <div className="b-head-contacts">
                            <div className="head-contacts__phone" ><Link style={{fontSize: "23px"}} href="tel:+79093802519">8 (909) 380-25-19</Link></div>
                                <div className="head-contacts__email"><a className="disabled" 
                                         rel="noFollow">г. Волгоград | 9:00-21:00</a></div>
                        </div>
                    </div>
                    <div className="pilot__4 hide-on-tablet hide-on-mobile">
                    </div>
                    <div className="pilot__5 hide-on-tablet hide-on-mobile">
                        <div className="pilot__sale">
                            <p><Link href="#" id="accia">Акция</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="js-fixed-menu2">
                <div className="container container-nopad sevice__fixed2__wrapper hide-on-tablet hide-on-mobile">
                    <div className="b-menu context" >
                        <div className="menu__inner">
                            <ul className="level-1" >
                                <li className="item-1"> <Link href="#" className="disabled"  rel="nofollow"> 
                                         Сайты </Link>
                                    <div className="item-1-sub js-submenu">
                                        <div className="b-sub-menu">
                                            <div className="sub-menu__wrapper">
                                                <div className="sub-menu__left">
                                                    <div className="sub-menu__col">

                                                        <div className="sub-menu__title"><Link
                                                                href="/razrabotka-saitov/main/" >Разработка сайтов </Link></div>
                                                        <div className="sub-menu__item"><Link
                                                            href="/razrabotka-saitov/landing-page/">Лендинг (Landing page)
                                                        </Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/razrabotka-saitov/site-vizitka/">Сайт - Визитка
                                                            </Link></div>
                                                        
                                                        <div className="sub-menu__item"><Link
                                                            href="/razrabotka-saitov/site-katalog/">Сайт - Каталог
                                                        </Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/razrabotka-saitov/site-magazin/">Интернет - Магазин
                                                            </Link></div>
                                                    </div>

                                                </div>
                                                <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                    <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled"
                                                            rel="nofollow">&nbsp;</a>
                                                        <div className="sub-menu__banner-inner">
                                                            <div className="sub-menu__banner-pic"><img alt=""
                                                                    src="/files/110/banermen.jpg" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item-1"> <Link  href="#" className="disabled" rel="nofollow"> 
                                       Продвижение </Link>
                                    <div className="item-1-sub js-submenu">
                                        <div className="b-sub-menu">
                                            <div className="sub-menu__wrapper">
                                                <div className="sub-menu__left">


                                                    <div className="sub-menu__col">
                                                        <div className="sub-menu__title"><Link
                                                                href="/poiskovoe-prodvizenie/" >SEO-продвижение</Link>
                                                        </div>
                                                        <div className="sub-menu__item"><Link
                                                            href="/poiskovoe-prodvizenie/seo-prodvizenie-yandex/">SEO в Яндексе
                                                        </Link></div>
                                                        <div className="sub-menu__item"><Link
                                                            href="/poiskovoe-prodvizenie/seo-prodvizenie-google/">SEO в Google
                                                        </Link></div>
                                                        
                                                    </div>
                                                   
                                                </div>
                                                <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                    <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled"  rel="nofollow">&nbsp;</a>
                                                        <div className="sub-menu__banner-inner">
                                                            <div className="sub-menu__banner-pic"><img alt=""
                                                                    src="/files/110/banermen.jpg" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item-1"> <Link href="#" className="disabled" rel="nofollow"> 
                                        Реклама </Link>
                                    <div className="item-1-sub js-submenu">
                                        <div className="b-sub-menu">
                                            <div className="sub-menu__wrapper">
                                                <div className="sub-menu__left">


                                                    <div className="sub-menu__col">
                                                        <div className="sub-menu__title"><Link
                                                                href="/digital-reklama/main/">Digital Реклама</Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/digital-reklama/yandex-direct/">Яндекс Директ
                                                            </Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/digital-reklama/yandex-market/">Яндекс
                                                                Маркет </Link></div>
                                                        
                                                    </div>
                                                   
                                                </div>
                                                <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                    <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled"  rel="nofollow">&nbsp;</a>
                                                        <div className="sub-menu__banner-inner">
                                                            <div className="sub-menu__banner-pic"><img alt=""
                                                                    src="/files/110/banermen.jpg" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item-1"> <Link href="#" className="disabled"  rel="nofollow"> 
                                        Поддержка </Link>
                                    <div className="item-1-sub js-submenu">
                                        <div className="b-sub-menu">
                                            <div className="sub-menu__wrapper">
                                                <div className="sub-menu__left">
                                                    <div className="sub-menu__col">


                                                        <div className="sub-menu__title"><Link href="/podderzka/main/">Техподдержка</Link>
                                                        </div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/podderzka/dorabotka/">Доработка сайтов</Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="/podderzka/kontent/">Наполнение
                                                                сайтов</Link></div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                    <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled" rel="nofollow">&nbsp;</a>
                                                        <div className="sub-menu__banner-inner">
                                                            <div className="sub-menu__banner-pic"><img alt=""
                                                                    src="/files/110/banermen.jpg" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item-1"> <Link href="#" className="disabled"  rel="nofollow"> 
                                        Полиграфия </Link>
                                    <div className="item-1-sub js-submenu">
                                        <div className="b-sub-menu">
                                            <div className="sub-menu__wrapper">
                                                <div className="sub-menu__left">
                                                    <div className="sub-menu__col">


                                                        <div className="sub-menu__title"><Link href="https://kopi34.ru/" target="_blank">&quot;KopiPrint&quot;</Link>
                                                        </div>
                                                        <div className="sub-menu__item"><Link
                                                                href="https://kopi34.ru/vizitki"  target="_blank">Визитки</Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="https://kopi34.ru/banner"  target="_blank">Баннеры</Link></div>
                                                        <div className="sub-menu__item"><Link
                                                                href="https://kopi34.ru/samokleyka" target="_blank">Самоклейки</Link></div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                    <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled" rel="nofollow">&nbsp;</a>
                                                        <div className="sub-menu__banner-inner">
                                                            <div className="sub-menu__banner-pic"><img alt=""
                                                                    src="/files/110/ban21.jpg" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="b-header">
                        <div className="b-sevice">
                            <ul className="level-1" >
                                
                                <li className="item-1"><span><Link href="https://docs.google.com/spreadsheets/d/1HG0mkkAURdu3BvK3V95WTPXmKe-jf1CzCEk2IGr1Moo/edit?usp=sharing" download target="_blank">

                                            Прайс 2023</Link></span> </li>
                                            
                                <li className="item-1"><span><Link href="/Портфолио_SEO-CY - 2022 год.xlsx" download>
                                            Портфолио ⬇️</Link></span> </li>
                                <li className="item-1"><span><Link href="/#otzyvy">
                                            Отзывы</Link></span> </li>
                                <li className="item-1"><span><Link href="/contacts/">
                                            Контакты</Link></span> </li>
                            </ul>
                        </div>
                    </div>
                    <p className="pilot__btn hide-on-mobile "><Link className="callback"
                            href="#form">Заказать услуги</Link></p>
                </div>
            </div>
            <div className="container container-nopad">
                <div className="b-picture2"></div>
            </div>
        </>
    );
}
