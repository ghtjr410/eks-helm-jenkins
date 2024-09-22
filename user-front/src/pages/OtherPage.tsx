import React from "react";
import { useNavigate } from "react-router-dom";

const OtherPage = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">유저 페이지 : Other</h1>
            <button 
                onClick={goToHomePage} 
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
            >
                Home 페이지로 이동
            </button>
        </div>
    );
}

export default OtherPage;