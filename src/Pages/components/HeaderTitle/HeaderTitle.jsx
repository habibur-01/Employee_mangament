import "./style.css"

const HeaderTitle = ({subHeading, heading}) => {
    return (
        <div className="mt-32">
            <div className="mx-auto space-y-4 text-center md:w-4/12 my-8">
                <p className="subtitle text-[#F14D5D] mb-2"> {subHeading} </p>
                <h3 className="text-3xl uppercase  py-4">{heading}</h3>
            </div>

        </div>
    );
};

export default HeaderTitle;