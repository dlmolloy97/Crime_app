//Adapted from Maximilian Peters' answer to https://stackoverflow.com/questions/46111610/map-marker-color-to-categorical-data-array-in-plotly-js?newreg=8cb332197fdd48b089650bbc2a8e8063

export const colorMapper=(arr,xvar,yvar,colour, mode='markers')=>{
    let traces = [];
    let categories = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (categories.indexOf(arr[i][colour]) === -1) {
            traces.push({x: [],y: [], type: mode, name: arr[i][colour]});
        categories.push(arr[i][colour]);
  } else {
        traces[categories.indexOf(arr[i][colour])].x.push(arr[i][xvar]);
        traces[categories.indexOf(arr[i][colour])].y.push(arr[i][yvar]);
  }
}
    return traces
};

export const selectWrangler=(arr)=>{
    var extract =arr.map(({year:actualValue})=>actualValue);
    const unique = extract.filter((value, index) => {
    return extract.indexOf(value) === index;});
    unique.sort();
    return unique
};

export const reOrient=(arr)=>{
    let keysource=arr[1];
    var full=[];
    for (var i in keysource){
        const map1 = arr.map(x => x[i]);
        full.push(map1)
}
    return full
};