"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Header: React.FC = () => {
    const tagRefNA = useRef<HTMLDivElement>(null);
    const tagRefOW = useRef<HTMLDivElement>(null);
    const tagRefM = useRef<HTMLDivElement>(null);
    const tagRefW = useRef<HTMLDivElement>(null);
    const tagRefK = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isFlex, setIsFlex] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.pageYOffset > 0);
            setIsFlex(window.pageYOffset > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseOverNA = () => {
        if (tagRefNA.current) {
            tagRefNA.current.style.visibility = "visible";
        }
    };

    const handleMouseOutNA = () => {
        if (tagRefNA.current) {
            tagRefNA.current.style.visibility = "hidden";
        }
    };

    const handleMouseOverOW = () => {
        if (tagRefOW.current) {
            tagRefOW.current.style.visibility = "visible";
        }
    };

    const handleMouseOutOW = () => {
        if (tagRefOW.current) {
            tagRefOW.current.style.visibility = "hidden";
        }
    };

    const handleMouseOverM = () => {
        if (tagRefM.current) {
            tagRefM.current.style.visibility = "visible";
        }
    };

    const handleMouseOutM = () => {
        if (tagRefM.current) {
            tagRefM.current.style.visibility = "hidden";
        }
    };

    const handleMouseOverW = () => {
        if (tagRefW.current) {
            tagRefW.current.style.visibility = "visible";
        }
    };

    const handleMouseOutW = () => {
        if (tagRefW.current) {
            tagRefW.current.style.visibility = "hidden";
        }
    };

    const handleMouseOverK = () => {
        if (tagRefK.current) {
            tagRefK.current.style.visibility = "visible";
        }
    };

    const handleMouseOutK = () => {
        if (tagRefK.current) {
            tagRefK.current.style.visibility = "hidden";
        }
    };

    const headerFlex = clsx("relative", "bg-white", {
        "flex items-center h-[65px]": isFlex,
    });

    const logoClass = clsx("my-[25px]", "mx-auto", "mb-[45px]", {
        "ml-[15px] mb-[25px] ": isFlex,
    })

    const headerUlClass = clsx("border-0", "h-full", "w-full", " max-w-[1200px]", "mx-auto", "text-center", "p-0", {
        "flex items-center justify-center mt-[7px]": isFlex,
    })

    const headerUltiClass = clsx("mt-[25px]", "absolute", "flex", "right-[100px]", "top-0", {
        "mt-[20px]": isFlex,
    })

    const signInClass = clsx("block", "tracking-[0.27px]", "leading-[14px]", "pt-[6px]", "text-[0.75rem]", {
        "hidden": isFlex,
    })

    const searchBarClass = clsx("flex", "flex-row-reverse", "border-b-[1px]", "border-black", "text-black", "pb-[3px]", "w-[145px]", "items-baseline", "justify-between", "cursor-pointer", {
        "border-b-0": isFlex,
    })

    const searctTextClass = clsx("text-xs", "text-gray-700", {
        "hidden": isFlex,
    })

    return (
        <header
            className={isSticky ? "sticky top-0 left-auto z-10 mb-auto" : "mb-auto"}
        >
            <div className="relative h-[50px] text-xs flex-wrap bg-[#000] text-[#fff] flex justify-center items-center font-bold uppercase tracking-widest leading-tight overflow-hidden">
                <div className="flex h-[50px] justify-center items-center font-bold uppercase tracking-widest leading-tight overflow-hidden max-w-[80%]">
                    <Marquee direction="left" speed={70}>
                        <a
                            href="https://coupletx.com/collections/outlet-blooming-sale"
                            className="mr-[100px]"
                        >
                            GIÁ ĐẶC BIỆT TỚI 50%
                        </a>
                        <a
                            href="https://coupletx.com/collections/best-saler"
                            className="mr-[100px]"
                        >
                            TRẢI NGHIỆM SẢN PHẨM BEST SELLER, ƯU ĐÃI KHI THANH TOÁN
                        </a>
                        <a
                            href="https://zalo.me/app/link/zapps/4446199182319379222?utm_campaign=followOA_voucher_drop&amp;utm_medium=online&amp;cdpaid=df39c562ae2f3ea87017d2283971527d-1680495445535&amp;gidzl=J4VTPF_nzsTDMzHc_-ZtPq1Ors7akV1k20pGRk3izcuEMD0ujEltDbjNWpdauw9eMLA2QpIAX18tz_7_PG&amp;orgId=e7bbb4006dac3dd86c2673d4c497a279&amp;qrVersion&amp;brandCode=CoupleTX&amp;utm_source=Website"
                            className="mr-[100px]"
                        >
                            FOLLOW ZALO NHẬN NGAY MÃ 30K
                        </a>
                        <a
                            href="https://coupletx.com/collections/bst-f10"
                            className="mr-[100px]"
                        >
                            BST FAST X MUA 2 ÁO TẶNG NÓN FF 199K
                        </a>
                        <a
                            href="https://coupletx.com/collections/ic-markdown-23"
                            className="mr-[100px]"
                        >
                            CHÀO HÈ HỨNG KHỞI MUA 2 TẶNG 1
                        </a>
                    </Marquee>
                </div>
            </div>
            <div className={headerFlex}>
                <div className="relative flex items-start justify-between">
                    <button
                        aria-label="Open menu"
                        className="header__menu--toggle toggle_menu d-lg-none d-block"
                    >
                        <img
                            className="icon navigation-menu svg-navigation-menu-dims w-100"
                            src="https://file.hstatic.net/1000364782/file/hamburger_167d1eb64106499f94c58df4a3f0c10b.svg"
                            alt="Menu"
                        />
                    </button>
                    <div className={logoClass}>
                        <a aria-label="home" href="/">
                            <img
                                src="/image/logo.svg"
                                alt="CPTX"
                                className="w-[172px] h-[41px]"
                            />
                        </a>
                    </div>
                </div>
                <div className="box-border static w-full h-full mt-0 duration-200 ease-in transition-left">
                    <div className="h-full">
                        <ul className={headerUlClass}>
                            <li className="uppercase inline-block h-[37px]">
                                <a
                                    onMouseOver={handleMouseOverNA}
                                    onMouseOut={handleMouseOutNA}
                                    href=""
                                    className="px-[10px] relative pb-[15px] h-full block w-full tracking-[0.08em] font-bold hover:after:scale-x-100"
                                >
                                    New Arrival
                                </a>
                                <div
                                    ref={tagRefNA}
                                    className="bg-white shadow-md text-black absolute left-0 right-0 z-10 justify-center p-[30px] flex invisible opacity-100 flex-nowrap border-t-[1px] border-gray-300"
                                >
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold uppercase">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Áo thun
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Áo Polo
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Áo khoác
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Quần | Chân váy
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Phụ kiện
                                            </a>
                                        </h2>
                                    </div>
                                    <div className="basis-[255px] max-w-[255px] text-left">
                                        <a
                                            href=""
                                            className="text-[0.75rem] p-0 inline-block tracking-[0.03em] font-normal uppercase m-0"
                                        >
                                            <div>
                                                <div>
                                                    <img
                                                        src="/image/banner_1.webp"
                                                        alt=""
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <h2 className="flex text-[0.8125rem] mt-[10px] p-0 leading-[18px] font-bold text-center">
                                                XEM TẤT CẢ SP NEW ARRIVALS
                                                <div>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        height="100%"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M192 128l128 128-128 128z"></path>
                                                    </svg>
                                                </div>
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="uppercase inline-block h-[37px]">
                                <a
                                    onMouseOver={handleMouseOverM}
                                    onMouseOut={handleMouseOutM}
                                    href=""
                                    className="px-[10px] pb-[15px] h-full block w-full tracking-[0.08em] font-bold"
                                >
                                    Men
                                </a>
                                <div
                                    ref={tagRefM}
                                    className="bg-white shadow-md text-black absolute left-0 right-0 z-10 justify-center p-[30px] flex invisible opacity-100 flex-nowrap border-t-[1px] border-gray-300"
                                >
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold uppercase">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Bộ Sưu Tập
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Summer
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Chống Nắng UV
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Phong Cách Basic
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Minions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Áo Nam
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Khoác Nam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Thun
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Polo
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Sơ Mi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Thun Đôi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Sweater
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Quần Nam
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Ngắn
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Dài
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Jean
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Khám Phá
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Hàng Mới
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Được Ưa Chuộng
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Sale Hấp Dẫn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Phụ kiện
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Tất - Vớ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Balo - Túi Xách
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Mũ - Nón
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[255px] max-w-[255px] text-left">
                                        <a
                                            href=""
                                            className="text-[0.75rem] p-0 inline-block tracking-[0.03em] font-normal uppercase m-0"
                                        >
                                            <div>
                                                <div>
                                                    <img
                                                        src="/image/cate_1.webp"
                                                        alt=""
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <h2 className="flex text-[0.8125rem] mt-[10px] p-0 leading-[18px] font-bold text-center">
                                                XEM TẤT CẢ SP MEN
                                                <div>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        height="100%"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M192 128l128 128-128 128z"></path>
                                                    </svg>
                                                </div>
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="uppercase inline-block h-[37px]">
                                <a
                                    onMouseOver={handleMouseOverW}
                                    onMouseOut={handleMouseOutW}
                                    href=""
                                    className="px-[10px] pb-[15px] h-full block w-full tracking-[0.08em] font-bold"
                                >
                                    Women
                                </a>
                                <div
                                    ref={tagRefW}
                                    className="bg-white shadow-md text-black absolute left-0 right-0 z-10 justify-center p-[30px] flex invisible opacity-100 flex-nowrap border-t-[1px] border-gray-300"
                                >
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold uppercase">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Bộ Sưu Tập
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Summer
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Croptop
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Chống Nắng UV
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Phong Cách Basic
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    BST Minions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Áo Nữ
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Khoác
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Thun
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Polo
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Sơ Mi - Áo Kiểu
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Thun Đôi
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Áo Sweater
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Quần/ Váy Nữ
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Váy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Đầm
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Ngắn
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Dài
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Quần Jean
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Khám Phá
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Được Ưa Chuộng
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Sale Hấp Dẫn
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Thời Trang Mới - Nữ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[230px] max-w-[230px] text-left">
                                        <h2 className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold">
                                            <a
                                                href=""
                                                className="text-[0.8125rem] m-0 p-0 leading-[18px] font-bold inline-block tracking-[0.03em] m-0 w-fit uppercase"
                                            >
                                                Phụ kiện
                                            </a>
                                        </h2>
                                        <ul className="basis-[230px] max-w-[230px] text-left">
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Tất - Vớ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Balo - Túi Xách
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    className="text-[0.75rem] p-0 font-normal tracking-[0.03em] uppercase inline-block w-fit	"
                                                >
                                                    Mũ - Nón
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-[255px] max-w-[255px] text-left">
                                        <a
                                            href=""
                                            className="text-[0.75rem] p-0 inline-block tracking-[0.03em] font-normal uppercase m-0"
                                        >
                                            <div>
                                                <div>
                                                    <img
                                                        src="/image/cate_2.jpg"
                                                        alt=""
                                                        className="w-full"
                                                    />
                                                </div>
                                            </div>
                                            <h2 className="flex text-[0.8125rem] mt-[10px] p-0 leading-[18px] font-bold text-center">
                                                XEM TẤT CẢ SP WOMEN
                                                <div>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        height="100%"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M192 128l128 128-128 128z"></path>
                                                    </svg>
                                                </div>
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="uppercase inline-block h-[37px]">
                                <a
                                    onMouseOver={handleMouseOverOW}
                                    onMouseOut={handleMouseOutOW}
                                    href=""
                                    className="px-[10px] pb-[15px] h-full block w-full tracking-[0.08em] font-bold"
                                >
                                    Our Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={headerUltiClass}>
                    <div className="bg-transparent border-transparent inline-block align-top h-auto m-0 py-[1px] px-[18px] text-center">
                        <span className={searchBarClass}>
                            <button className="w-auto h-auto p-0 m-0 bg-transparent border-0 min-h-auto leading-1">
                                <svg
                                    className="max-h-[15px]"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                </svg>
                            </button>
                            <span className={searctTextClass}>Tìm kiếm</span>
                        </span>
                    </div>
                    <div className="text-[10px]">
                        <a
                            href=""
                            className="flex flex-col items-center py-[3px] px-[18px] font-normal text-xs h-[100%]"
                        >
                            <span className="tracking-[0.27px] relative leading-[14px]">
                                <svg
                                    className="h-[16px] w-[16px]"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                </svg>
                            </span>
                            <span className={signInClass}>
                                Sign in
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute right-[60px] top-0 mt-[25px]">
                    <a
                        href=""
                        className="block px-0 pb-[20px] pr-[16px] pt-[3] font-[400] text-[10px]"
                    >
                        <svg
                            className="tracking-[0.27px] relative leading-[14px] h-[16px] w-[20px]"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 32 32"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z"></path>
                        </svg>
                        <span className="p-0 absolute left-[25px] top-[10px] text-center bottom-[19px] leading-[0.5]">
                            0
                        </span>
                        <span className={signInClass}>
                            Cart
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
