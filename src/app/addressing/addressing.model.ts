export interface Network {
    mask: string;
    hosts: number;
}

export const networks: Network[] = [
    { mask: '128.0.0', hosts: 2147483646 },
    { mask: '192.0.0.0', hosts: 1073741822 },
    { mask: '224.0.0.0', hosts: 536870910 },
    { mask: '240.0.0.0', hosts: 268435454 },
    { mask: '248.0.0.0', hosts: 134217726 },
    { mask: '252.0.0.0', hosts: 67108862 },
    { mask: '254.0.0.0', hosts: 33554430 },
    { mask: '255.0.0.0', hosts: 16777214 },
    { mask: '255.128.0.0', hosts: 8388606 },
    { mask: '255.192.0.0', hosts: 4194302 },
    { mask: '255.224.0.0', hosts: 2097150 },
    { mask: '255.240.0.0', hosts: 1048574 },
    { mask: '255.248.0.0', hosts: 524286 },
    { mask: '255.252.0.0', hosts: 262142 },
    { mask: '255.254.0.0', hosts: 131070 },
    { mask: '255.255.0.0', hosts: 65534 },
    { mask: '255.255.128.0', hosts: 32766 },
    { mask: '255.255.192.0', hosts: 16382 },
    { mask: '255.255.224.0', hosts: 8190 },
    { mask: '255.255.240.0', hosts: 4094 },
    { mask: '255.255.248.0', hosts: 2046 },
    { mask: '255.255.252.0', hosts: 1022 },
    { mask: '255.255.254.0', hosts: 510 },
    { mask: '255.255.255.0', hosts: 254 },
    { mask: '255.255.255.128', hosts: 126 },
    { mask: '255.255.255.192', hosts: 62 },
    { mask: '255.255.255.224', hosts: 30 },
    { mask: '255.255.255.240', hosts: 14 },
    { mask: '255.255.255.248', hosts: 6 },
    { mask: '255.255.255.252', hosts: 2 }
];
