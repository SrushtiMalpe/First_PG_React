const data = [ React.createElement
    ("h1" , {id : "name1"}, "Savitribai Phule"),
    React.createElement 
    ("h2",{id : "detail"}, "Savitribai Phule was an educator and reformer who fought for women's education and rights. She and her husband, Jyotirao Phule, opened the first school for girls in India in 1848. They also opened a care center for pregnant rape victims and helped deliver their children. ") ] ;
const root = ReactDOM.createRoot(document.getElementById("name"));
root.render(data);