var currentTheme = '';
const themes = {
    'theme0': {
        images: {
            theme_frame: 'noao0801a_thin.jpg'
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,0.8)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme1': {
        images: {
            theme_frame: "noao0403a_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme2': {
        images: {
            theme_frame: "noaongc7023_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme3': {
        images: {
            theme_frame: "noirlab2311a_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme4': {
        images: {
            theme_frame: "noirlab2424a_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme5': {
        images: {
            theme_frame: "noao04086_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme6': {
        images: {
            theme_frame: "iotw2048a_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    },

    'theme7': {
        images: {
            theme_frame: "noaosh2126_thin.jpg"
        },
        colors: {"tab_background_text": "rgba(196,196,196,1)",
            "tab_line": "rbga(14,228,235,1)",
            "tab_text": "rgba(196,196,196,1)",
            "toolbar": "rgba(51,51,51,1)",
            "toolbar_text": "rgba(196,196,196,1)",
            "toolbar_field": "rgba(0,0,0,1)",
            "toolbar_field_text": "rgba(196,196,196,1)"
        }
    }
};

let curIndex = 0;

function setTheme(theme) {
    if (currentTheme === theme)
    { return; }
    currentTheme = theme;
    browser.theme.update(themes[theme]);

}

function cycleImages(){
    curIndex = (curIndex + 1) % 8;
    setTheme(`theme${curIndex}`);
}

setInterval(cycleImages, 18000000);

cycleImages();

