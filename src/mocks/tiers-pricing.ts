export const tiers = [
    {
        name: 'BASIC',
        id: 'tier-basic',
        href: '#',
        price: 'Free',
        description: 'Gói miễn phí mặc định của người dùng mới.',
        features: ['Đăng Tác Phẩm', 'Tối đa 20 ảnh cho 1 bài đăng', 'Tối đa 3 collection'],
        current: true,
        recommend: false,
    },
    {
        name: 'MEMBER',
        id: 'tier-member',
        href: '#',
        price: '4.99$',
        description: 'Gói cung cấp các tính năng cơ bản để trải nghiệm dịch vụ.',
        features: [
            'Tìm kiếm thông minh',
            'Tối đa 50 ảnh cho 1 bài đăng',
            'Tối đa 5 collection',
            'Ưu tiên xét duyệt tag mới',
            'Mở khoá tính năng tải xuống hình ảnh',
        ],
        current: false,
        recommend: true,
    },
    {
        name: 'VIP',
        id: 'tier-vip',
        href: '#',
        price: '19.99$',
        description:
            'Bao gồm các nội dung của gói BASIC và mở các tính năng để người dùng có thể kiếm được thu nhập từ tác phẩm.',
        features: [
            'Không giới hạn hình ảnh tải lên',
            'Không giới hạn số lượng collection',
            'Khung viền VIP cho bài đăng và Avatar',
            'Tắt quảng cáo',
            'Mở tính năng FanBox',
        ],
        current: false,
        recommend: false,
    },
];

export type TierType = (typeof tiers)[0];
