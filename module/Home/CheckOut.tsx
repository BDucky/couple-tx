"use client";
import { CheckOutProps } from "@/types";
import React from "react";

const CheckOut = ({
    img,
    category,
    descriptions,
}: CheckOutProps) => {
    return (
        <div className="container flex jusstify-center">

            <div className=" w-3/5">
                <div className="main ">
                    <div className="">
                        <div className="border">
                            <div className="">
                                <h1 className="font-bold text-2xl">Thông tin giao hàng</h1>
                            </div>
                            <div className="">
                                <p className="">
                                    Bạn đã có tài khoản? <a href="">Đăng nhập</a>
                                </p>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <input
                                                placeholder="Họ và tên"
                                                className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-3/5">
                                            <input
                                                placeholder="Email"
                                                className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                                                type="email"
                                            />
                                        </div>
                                        <div className="px-2 w-2/5">
                                            <input
                                                placeholder="Số điện thoại"
                                                className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                                                maxLength="15"
                                                type="tel"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border">
                                <div className="">
                                    <form
                                        id="form_update_shipping_method"
                                        className=""
                                        acceptCharset="UTF-8"
                                        method="post"
                                    >
                                        <input name="utf8" type="hidden" value="✓" />
                                        <div className="">
                                            <div className="">
                                                <label className="">
                                                    <span className="">Giao tận nơi</span>
                                                </label>
                                                <div className="px-2 w-full">
                                                    <input
                                                        placeholder="Địa Chỉ"
                                                        className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div>
                                <div className="">
                                    <div className="">
                                        <div className=""></div>
                                    </div>
                                    <div className="">
                                        <h2 className="font-bold text-2xl">Phương thức thanh toán</h2>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="payment_method_id_509146">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            type-id="1"
                                                            id="payment_method_id_509146"
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            value="509146"
                                                            checked=""
                                                        />
                                                    </div>
                                                    <div className="radio-content-input">
                                                        <div className="flex items-center">
                                                            <img
                                                                className="main-img col-span-6"
                                                                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="radio-label-primary">
                                                                Thanh toán khi giao hàng (COD)
                                                            </span>
                                                            <span className="quick-tagline hidden"></span>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <hr className="my-4" /> 
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="payment_method_id_1002465170">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            type-id="8"
                                                            id="payment_method_id_1002465170"
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            value="1002465170"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 self-center relative">
                                                        <div>
                                                            <span className="radio-label-primary">
                                                                Thanh toán online qua ATM/Visa/MasterCard/JCB
                                                            </span>
                                                            <span className="quick-tagline hidden"></span>
                                                            <img
                                                                className="child-img"
                                                                src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=4"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="hd_payment moca" style={{ display: "none" }}>
                                                        Khi bấm vào "Hoàn tất đơn hàng" bạn sẽ được mở sang cổng thanh toán của{" "}
                                                        <img
                                                            src="//file.hstatic.net/1000184601/file/logo-vnpayqr-update_7504b421fbb747818543c8ef939add41.png"
                                                            alt=""
                                                        />{" "}
                                                        để thực hiện thanh toán.
                                                    </p>
                                                </label>
                                            </div>
                                            <hr className="my-4" /> 
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="payment_method_id_1002663486">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            type-id="36"
                                                            id="payment_method_id_1002663486"
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            value="1002663486"
                                                        />
                                                    </div>
                                                    <div className="radio-content-input">
                                                        <div className="flex items-center">
                                                            <img
                                                                className="main-img col-span-6"
                                                                src="https://hstatic.net/0/0/global/design/seller/image/payment/grabmoca.svg?v=4"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="radio-label-primary">Ví Moca trên ứng dụng Grab</span>
                                                            <span className="quick-tagline hidden"></span>
                                                        </div>
                                                    </div>
                                                    <p className="hd_payment moca" style={{ display: "none" }}>
                                                        Khi bấm vào "Hoàn tất đơn hàng" bạn sẽ được mở sang cổng thanh toán của{" "}
                                                        <img
                                                            src="//file.hstatic.net/1000184601/file/logo-moca_cb6e7457cf6f4d45bb60fe276374b78e.png"
                                                            alt=""
                                                        />{" "}
                                                        để thực hiện thanh toán.
                                                    </p>
                                                </label>
                                            </div>
                                            <hr className="my-4" /> 
                                            <div className="radio-wrapper content-box-row">
                                                <label className="radio-label" htmlFor="payment_method_id_1003043687">
                                                    <div className="radio-input payment-method-checkbox">
                                                        <input
                                                            type-id="2"
                                                            id="payment_method_id_1003043687"
                                                            className="input-radio"
                                                            name="payment_method_id"
                                                            type="radio"
                                                            value="1003043687"
                                                        />
                                                    </div>
                                                    <div className="radio-content-input">
                                                        <div className="flex items-center">
                                                            <img
                                                                className="main-img col-span-6"
                                                                src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="radio-label-primary">Chuyển khoản qua ngân hàng</span>
                                                            <span className="quick-tagline hidden"></span>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <hr className="my-4" /> 
                                            <div className="radio-wrapper content-box-row content-box-row-secondary hidden">
                                                <div className="blank-slate">
                                                    Quý khách vui lòng đọc kĩ hướng dẫn thanh toán trước khi hoàn tất qua hình thức chuyển khoản: a. Quý khách vui lòng kiểm tra lại đơn hàng trước khi thanh toán b. Quý khách chuyển khoản đúng số tiền trên hóa đơn theo thông tin: Số tài khoản: 060209753025 Tên tài khoản: CTY TNHH COUPLE TX Ngân hàng Sacombank- CN Phương Nam Nội dung: Tên quý khách - coupletx.com Sau khi hoàn tất, Couple TX sẽ liên hệ để xác nhận và gửi đơn hàng cho quý khách, chân thành cảm ơn quý khách vì đã yêu mến Couple TX.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center">
                            <button
                                className="border border-black bg-white text-black px-5 py-2"
                                id="button_submit_checkout"
                                type="button"
                            >
                                Hoàn tất đơn hàng
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-2/5 ml-4">
                <div className="sidebar border">
                    <div className="sidebar-content">
                        <div className="col-span-1 bg-white lg:block hidden">
                            <div className="py-6 border-b space-y-6 px-8">
                                <div className="table-container">
                                    <table className="table ">
                                        <tbody>
                                            <tr className="grid grid-cols-6 gap-2 border-b-1">
                                                <td className="table-cell">
                                                    <div className="grid gap-2 border-b-1">
                                                        <div className="col-span-1 self-center relative">
                                                            <img className="rounded w-full" src={img} />
                                                            <span className="product-thumbnail-quantity absolute top-0 right-0 bg-white rounded-full p-1 text-xs">1</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="table-cell flex flex-col col-span-3 pt-2">
                                                    <span className="text-gray-600 text-md font-semi">Áo Khoác Nam Cổ Đứng 1 Lớp MOP 1045</span>
                                                    <span className="text-gray-400 text-sm inline-block pt-2">
                                                        Đen / Nam / M
                                                    </span>
                                                </td>
                                                <td className="table-cell col-span-2 pt-3">
                                                    <span className="text-black-400 font-semibold inline-block">599,000 VND</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="border-t-2 my-4" />
                                <div className="discount-section">
                                    <form id="form_discount_add" acceptCharset="UTF-8" method="post">
                                        <input name="utf8" type="hidden" value="✓" />
                                        <div className="discount-fieldset">
                                            <div className="input-btn-wrapper flex items-center">
                                                <div className="discount-field-input-btn-wrapper flex">
                                                    <div className="inline-block mt-2 w-4/5">
                                                        <input
                                                            placeholder="Mã giảm giá"
                                                            className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                                                        />
                                                    </div>
                                                    <button type="submit" className=" inline-block px-2  w-2/5">
                                                        <span className="block w-full max-w-xs mx-auto border border-transparent bg-gray-300 hover:bg-gray-300 focus:bg-gray-300 text-black px-5 py-2">
                                                            Sử dụng
                                                        </span>
                                                        <i className="btn-spinner icon icon-button-spinner"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="discount-note">Bạn có mã giảm giá? Vui lòng nhập tại đây!</div>
                                </div>
                                <hr className="border-t-2 my-4" />
                                <div className="">
                                    <div className="redeem-login flex items-center">
                                        <div className="redeem-login-title w-2/3">
                                            <h2>Chương trình khách hàng thân thiết</h2>
                                        </div>
                                        <div className="block w-1/3 mx-auto">
                                            <a href="" className="border border-black bg-white text-black px-5 py-2">
                                                Đăng nhập
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-t-2 my-4" />
                                <div className="">
                                    <table className="">
                                        <tbody>
                                            <tr className="">
                                                <td className="w-3/4">Tạm tính</td>
                                                <td className="w-1/4">
                                                    <span className="">599,000 VND</span>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td className="w-3/4">Phí vận chuyển</td>
                                                <td className="w-1/4">
                                                    <span className="">—</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <hr className="border-t-2 my-6" />
                                        <tfoot className="">
                                            <tr className="">
                                                <td className="w-3/4">
                                                    <span className="">Tổng cộng</span>
                                                </td>
                                                <td className="w-1/4">
                                                    <span className="" data-checkout-payment-due-target="59900000">
                                                        599,000
                                                    </span>
                                                    <span className="">VND</span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="notenew">
                                        <i>
                                            <br />Cảm ơn bạn đã luôn tin tưởng và ủng hộ Couple TX
                                        </i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CheckOut;