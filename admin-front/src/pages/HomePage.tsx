import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const goToOtherPage = () => {
        navigate("/other");
    }
// 
// 
// 
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">하드코딩으로 먼저 성공하자 관리자 페이지 : Home</h1>
            <button 
                onClick={goToOtherPage} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Other 페이지로 이동
            </button>
        </div>
    );
}

export default HomePage;