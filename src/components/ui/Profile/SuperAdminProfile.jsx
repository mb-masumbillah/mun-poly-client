import SectionAdminProfile from "./SuperAdmin/SectionAdminProfile";
import SuperAProfile from "./SuperAdmin/SuperAProfile";


const SuperAdminProfile = () => {
    return (
        <div>
            <section>
                <SuperAProfile></SuperAProfile>
            </section>
            <section>
                <SectionAdminProfile></SectionAdminProfile>
            </section>
        </div>
    );
};

export default SuperAdminProfile;