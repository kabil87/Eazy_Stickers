import PageTitle from "./PageTitle";

const PageHeading = (props) => {

    return (
        
        <div className="mt-5">

            <div className="flex justify-center "> <PageTitle title={"Eazy Stickers!"} /></div>

            <div className="mt-3 flex justify-center">
                <p className="text-center   max-w-xl text-primary dark:text-lighter ">{props.children}</p>
            </div>
        </div>


        
        
    );
};

export default PageHeading;