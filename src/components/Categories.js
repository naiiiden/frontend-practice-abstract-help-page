import CategoryItem from "./CategoryItem"
import dec1 from "../images/dec1.png";
import dec2 from "../images/dec2.png";
import dec3 from "../images/dec3.png";
import dec4 from "../images/dec4.png";
import dec5 from "../images/dec5.png";
import dec6 from "../images/dec6.png";

const Categories = () => {
    return (
        <div className="main--container">
            <div className="categories--container">
                <CategoryItem src={dec1} h2Text="Using Abstract" pText="Abstract lets you manage, version, and document your designs in one place." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract"/>
                <CategoryItem src={dec2} h2Text="Manage your account" pText="Configure your account settings, such as your email, profile details, and password." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account"/>
            </div>
            <div className="categories--container">
                <CategoryItem src={dec3} h2Text="Manage organizations, teams, and projects" pText="Use Abstract organizations, teams, and projects to organize your people and your work." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects"/>
                <CategoryItem src={dec4} h2Text="Manage billing" pText="Change subscriptions and payment details." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing"/>
            </div>
            <div className="categories--container">
                <CategoryItem src={dec5} h2Text="Authenticate to Abstract" pText="Set up and configure SSO, SCIM, and Just-in-Time provisioning." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract"/>
                <CategoryItem src={dec6} h2Text="Abstract Support" pText="Get in touch with a human." aText="Learn More →" href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support"/>
            </div>
        </div>
    )
}

export default Categories;