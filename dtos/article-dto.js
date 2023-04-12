module.exports = class ArticleDto {
    title;
    text;
    time;

    constructor(model){
        this.title = model.title;
        this.text = model.text;
        this.time = model.time;
    }
}
