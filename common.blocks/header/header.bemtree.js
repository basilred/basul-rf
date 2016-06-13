block('header').content()(function() {
    return [
        {
            block: this.block,
            elem: 'contacts',
            content: [
                '+7 978 011 99 11',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l', callback : true },
                    text : 'Обратный звонок'
                }
            ].map(para => ({ elem: 'line', content: para }))
        },
        {
            block: 'logo',
            url: this.data.relPathToRoot,
            content: [
                {
                    elem: 'name',
                    content: 'Емельян Басюл'
                },
                {
                    elem: 'position',
                    content: 'арбитражный управляющий'
                }
            ]
        },
        { block: 'nav' }
    ];
});
