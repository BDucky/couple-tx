const Login = () => {
    return (
        <div className="container py-[90px] px-[30px] text-center bg-white">
            <h1 className="text-3xl mb-4" style={{ height: '70px', fontSize: '25px', fontWeight: '180' }}>
                ĐĂNG NHẬP BẰNG SỐ ĐIỆN THOẠI
            </h1>

            <form className="mx-auto my-4" style={{ maxWidth: '459px' }}>
                <div className="form-group" style={{ width: '459px', height: '36px' }}>
                    <label htmlFor="phoneNumber"></label>
                    <input
                        type="tel"
                        className="form-control border-solid border border-black px-1 py-1"
                        id="phoneNumber"
                        name="phone_number"
                        placeholder="Số điện thoại (+84)"
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'transparent',
                            border: '1px solid black',
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="btn button-normal btn-check bg-black text-white"
                    style={{ width: '459px', height: '36px' }}
                >
                    ĐĂNG NHẬP
                </button>
            </form>
        </div>
    );
};

export default Login;
