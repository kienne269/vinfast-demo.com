const img1 = require("../images/vinfast-data-01/VFe34_1624348575.webp").default
const img2 = require("../images/vinfast-data-01/LuxSA_1624348590.webp").default
const img3 = require("../images/vinfast-data-01/LuxA_1624348606.webp").default
const img4 = require("../images/vinfast-data-01/Fadil_1624348615.webp").default
const img5 = require("../images/vinfast-data-01/president.webp").default
const logoVin = require("../images/vinfast/logo_gray.svg").default

const OtoData = [
    {
        slug: "vfe34",
        dongxe: "DÒNG SUV",
        slogan: "CÙNG BẠN BỨT PHÁ " + "MỌI GIỚI HẠN",
        name: "VF e34",
        descs: ['Ô tô điện thông minh khởi tạo tương lai di chuyển xanh' , 
            'Hệ thống pin tiên tiến, chính sách thuê pin độc đáo' , 
            'Chi phí vận hành, bảo dưỡng rẻ hơn xe xăng'
        ],
        
        logoVin: logoVin,
        img: img1
    },
    {
        slug: "lux-sa",
        dongxe: "DÒNG SUV",
        slogan: "CHINH PHỤC MỌI " + "CON ĐƯỜNG",
        name: "LUX SA2.0",
        descs: ['Thiết kế sang trọng, mạnh mẽ' , 
            'Hệ dẫn động 4 bánh toàn thời gian cho cảm giác lái đầm chắc mà êm ái' , 
            'Khung gầm liền khối vững chắc chuẩn châu Âu tối ưu' ,
            'Chuẩn an toàn cao nhất 5 sao ASEAB NCAP'
        ],
        
        logoVin: logoVin,
        img: img2
    },
    {
        slug: "lux-a",
        dongxe: "DÒNG SEDAN",
        slogan: "TẬN HƯỞNG TỪNG" + " KHOẢNH KHẮC",
        name: "LUX A2.0",
        descs: ['Thiết hế sang trọng, tính tế' , 
            'Động cơ tăng áp mạnh mẽ' , 
            'Hệ dẫn động cầu sau và hệ thống treo độc lâp cho cảm giác lái thể thao' ,
            'Chuẩn an toàn cao nhất 5 sao ASEAB NCAP'
        ],
        
        logoVin: logoVin,
        img: img3
    },
    {
        slug: "fadil",
        dongxe: "DÒNG HATCHBACK",
        slogan: "TỐI ƯU " + "MỌI TRẢI NGHIỆM",
        name: "FADIL",
        descs: ['Xe đô thị cỡ nhỏ hoàn hảo' , 
            'Khả năng vận hành mạnh mẽ dẫn đầu phân khúc' , 
            'Hệ thống giải trí và kết nối hiện đại' ,
            'Chuẩn an toàn cao nhất 4 sao ASEAB NCAP'
        ],
        
        logoVin: logoVin,
        img: img4
    },
    {
        slug: "president",
        dongxe: "DÒNG SUV",
        slogan: "DẤU ẤN " + "NGƯỜI THỦ LĨNH",
        name: "PRESIDENT",
        descs: ['Lời khẳng định về năng lực sản xuất ô tô của VinFast' , 
            'Phiên bản giới hạn 500 chiếc trên toàn thế giới' , 
            'Thiết kế uy lực đầy kiêu hãnh, tôn dấu ấn tinh hoa của chủ nhân' ,
            'Khả năng vận hành vượt trội với động cơ V8 6,2L mạnh mẽ bậc nhất thế giới'
        ],
        
        logoVin: logoVin,
        img: img5
    }
]

export default OtoData