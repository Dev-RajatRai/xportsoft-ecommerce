import CardLayout from "../../Layout/card/index";

const Card = () => {
    let arr = [1, 2, 3, 4];

    return (
        <>
            <section id="allCards">
                {arr.map((item) => (
                    <CardLayout key={item} />
                ))}
            </section>
        </>
    );
};
export default Card;