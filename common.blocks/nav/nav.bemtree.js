block('nav').content()(function() {
    var data = this.data,
        pagesMap = data.pages.reduce(function(prev, page) {
            prev[page.url] = page;
            return prev;
        }, {});

    // {
    //     block: 'link',
    //     mix: { block: this.block, elem: 'item' },
    //     url: data.relPathToRoot,
    //     content: 'Главная'
    // }

    return ['about', 'bankruptcy', 'submenu', 'contacts'].map(function(item) {
        if (item === 'submenu') return {
            elem: 'item',
            content: [
                'Банкротство юридического лица',
                {
                    elem: 'submenu',
                    content: [
                        'bankruptcy-proceedings',
                        'external-management',
                        'financial-recovery',
                        'settlement-agreement',
                        'supervision-procedure'
                    ].map(function(url) {
                        return url === data.url ? {
                            elem: 'submenu-item',
                            elemMods: { active: true },
                            content: pagesMap[url].title
                        } : {
                            block: 'link',
                            mix: { block: this.block, elem: 'submenu-item' },
                            url: data.relPathToRoot + url + '/',
                            content: pagesMap[url].title
                        };
                    }, this)
                }
            ]
        };

        return data.url === item ? {
            elem: 'item',
            elemMods: { active: true },
            content: pagesMap[item].title
        } : {
            block: 'link',
            mix: { block: this.block, elem: 'item' },
            url: data.relPathToRoot + item + '/',
            content: pagesMap[item].title
        };
    }, this);
});
