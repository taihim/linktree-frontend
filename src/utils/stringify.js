

export const stringifyJsx = (templateJSX) => {

    return JSON.stringify(templateJSX, (k, v) =>
    typeof v === 'symbol' ? `$$Symbol:${Symbol.keyFor(v)}` : v,
    )

};

export const parseJsx =  (data) => {
    return JSON.parse(data, (k, v) => {
        const matches = v && v.match && v.match(/^\$\$Symbol:(.*)$/);
        return matches ? Symbol.for(matches[1]) : v;
    })
    
};