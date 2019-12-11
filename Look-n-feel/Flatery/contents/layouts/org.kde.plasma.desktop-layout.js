var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "showSecondHand": "true"
                        }
                    },
                    "geometry.height": 12,
                    "geometry.width": 12,
                    "geometry.x": 90,
                    "geometry.y": 2,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Часы с циферблатом"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "Applet-20:1600,64,256,240,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1019",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "bottomright",
                    "ToolBoxButtonX": "1890",
                    "ToolBoxButtonY": "929",
                    "positions": "1,17,desktop:/glowbar.svg,0,9,desktop:/kitty.png,0,10,desktop:/line.svg,0,11,desktop:/logo22.png,0,12,desktop:/video.mp4,0,13,desktop:/Новая папка,0,14,desktop:/1554657367189452517.jpg,0,0,desktop:/1920x1080.png,0,1,desktop:/account-2452.png,0,2,desktop:/colors,0,3,desktop:/dmzsc1.mp4,0,4,desktop:/drawыыыing.svg,0,5,desktop:/drawыыыing.svg.2019_11_23_10_07_24.0.svg,0,6,desktop:/Flatery-plasma.png,0,7,desktop:/Flatery-plasma2.png,0,8",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/cybernix/.local/share/wallpapers/Flatery/1920x1080.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "1346"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "aliasFontSize": "41",
                            "temperatureFontSize": "76"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "resources": "[{\"sourceName\":\"lmsensors/amdgpu-pci-0900/edge\",\"alias\":\"\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"lmsensors/amdgpu-pci-0900/vddgfx\":{\"temperature\":0},\"lmsensors/asus-isa-0000/cpu_fan\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tctl\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tdie\":{\"temperature\":0},\"udisks/SPCC_Solid_State_Disk_AA000000000000001144\":{\"temperature\":0},\"udisks/ST1000DM003_1ER162_Z4YAJ37K\":{\"temperature\":0}}},{\"sourceName\":\"lmsensors/k10temp-pci-00c3/Tdie\",\"alias\":\"\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"lmsensors/amdgpu-pci-0900/temp1\":{\"temperature\":0},\"lmsensors/amdgpu-pci-0900/vddgfx\":{\"temperature\":0},\"lmsensors/asus-isa-0000/cpu_fan\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tctl\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tdie\":{\"temperature\":0},\"udisks/SPCC_Solid_State_Disk_AA000000000000001144\":{\"temperature\":0},\"udisks/ST1000DM003_1ER162_Z4YAJ37K\":{\"temperature\":0}}},{\"sourceName\":\"lmsensors/k10temp-pci-00c3/Tctl\",\"alias\":\"\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"lmsensors/amdgpu-pci-0900/temp1\":{\"temperature\":0},\"lmsensors/amdgpu-pci-0900/vddgfx\":{\"temperature\":0},\"lmsensors/asus-isa-0000/cpu_fan\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tctl\":{\"temperature\":0},\"lmsensors/k10temp-pci-00c3/Tdie\":{\"temperature\":0},\"udisks/SPCC_Solid_State_Disk_AA000000000000001144\":{\"temperature\":0},\"udisks/ST1000DM003_1ER162_Z4YAJ37K\":{\"temperature\":0}}}]"
                        }
                    },
                    "plugin": "org.kde.thermalMonitor"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "27"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
