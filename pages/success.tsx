import { GOOGLE_IMAGE_CONSTANT } from './config/constants/image.constants';
import { CustomImage } from './components/Image/image.component';

const SuccessPage = () => {
    return (
        <div className="container m-5">
            <div className="columns is-flex is-justify-content-center">
                <div className="image-header">
                    <CustomImage url={GOOGLE_IMAGE_CONSTANT} style={{width: '200px'}}/>
                </div>
            </div>
            <div className="columns is-flex is-flex-direction-column has-text-centered m-5">
                <h1 className="title is-1 has-text-link">Verificación en curso</h1>
                <p>Estamos verificando su cuenta, espere nuestro mensaje de confirmación</p>
            </div>
        </div>
    )
}

export default SuccessPage;