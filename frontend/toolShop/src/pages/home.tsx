import AutoGallery from '../components/autoGallery/autoGallery';
//import Dropdown from '../components/dropdown/dropdown';

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Home</h1>
            {/*<Dropdown /> */}
            <AutoGallery />
        </div>
    );
}
