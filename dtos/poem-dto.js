module.exports = class PoemDto {
    title;
    text;

    constructor(model){
        this.title = model.title;
        this.text = model.text;
    }
}
