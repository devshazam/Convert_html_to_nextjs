import Link from 'next/link';

export function MobileMenu() {
    return (
        <>
            <div className="l-sidebar js-sidebar js-sidebar-hide"></div>
            <div className="l-sidebar_inner js-sidebar-inner">
                <div className="b-sidebar">
                    <div className="sidebar__item sidebar__contacts">
                        <div className="b-head-contacts">
                            <div className="head-contacts__phone"><Link href="tel:+79093802519">+7 (909) 380-25-19</Link>
                            </div>
                            <noindex>
                                <div className="head-contacts__email"><Link className="disabled" rel="nofollow" href="#">9:00-21:00</Link>
                                </div>
                            </noindex>
                        </div>
                    </div>
                    <div className="sidebar__item sidebar__menu">
                        <ul>
                            <li><Link href="/razrabotka-saitov/main/"><span>
                                <img src="/files/110/ficon3.png" alt="" /> 
                                            </span>Разработка сайтов</Link></li>
                            <li><Link href="/razrabotka-saitov/landing-page/"><span>
                                    </span>Лендинги</Link></li>
                            <li><Link href="/razrabotka-saitov/site-vizitka/"><span> 
                                    </span>Визитки</Link></li>
                            <li><Link href="/razrabotka-saitov/site-katalog/"><span> 
                                </span>Сайты-Каталоги</Link>
                            </li>
                            <li><Link href="/razrabotka-saitov/site-magazin/"><span> 
                                </span>Сайты-Магазины</Link>
                            </li>
                            <li><Link href="/poiskovoe-prodvizenie/main"><span>
                                <img src="/files/110/ficon3.png" alt="" /> 
                                            </span>SEO продвижение</Link></li>
                            <li><Link href="/poiskovoe-prodvizenie/seo-prodvizenie-yandex/"><span>
                                    </span>SEO для Яндекс</Link></li>
                            <li><Link href="/poiskovoe-prodvizenie/seo-prodvizenie-google/"><span> 
                                    </span>SEO для Google</Link></li>


                            <li><Link href="/digital-reklama/main/"><span>
                                <img src="/files/110/ficon3.png" alt="" /> 
                                            </span>Digital Реклама</Link></li>
                            <li><Link href="/digital-reklama/yandex-direct/"><span>
                                    </span>Яндекс Директ</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__item">
                        <p className="pilot__btn hide-on-desktop hide-on-tablet"><Link className="header_button js-sidebar-link"
                                href="">Заказать услуги</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
