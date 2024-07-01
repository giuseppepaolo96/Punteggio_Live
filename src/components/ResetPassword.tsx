import React, { useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { LABEL_CONSTANT } from "constants/label.constant";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import './Register.scss';

export default function ResetPassword() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const labelConstant = LABEL_CONSTANT;
    const [value, setValue] = useState<string>('');
    const stepperRef = useRef<any>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const toast = useRef<Toast>(null);



    const handleNext = () => {
        if (stepperRef.current) {
            stepperRef.current.nextCallback();
        }

        if (currentStep < 1) {
            setCurrentStep(prevStep => prevStep + 1);
            console.log(currentStep);
        } else if (toast.current) {
            toast.current.show({ summary: labelConstant.email_inviata, detail: labelConstant.registrazione_completata });
        }
    };

    const handlePrev = () => {
        if (currentStep < 2) {
            navigate('/login');
        } else {
            stepperRef.current.prevCallback();
            setCurrentStep(prevStep => prevStep - 1);
        }

    };


    const getHeaderContent = () => {
        let title, subTitle;
        switch (currentStep) {
            case 0:
                title = labelConstant.reimposta_password;
                subTitle = labelConstant.insert_dati_reimposta_pass;
                break;
            case 1:
                title = labelConstant.reimposta_password;
                subTitle = labelConstant.verifica_email;
                break;
            default:
                title = labelConstant.reimposta_password;
                subTitle = labelConstant.insert_dati_reimposta_pass;
        }
        return { title, subTitle };
    };

    const { title, subTitle } = getHeaderContent();


    const footer = (
        <>
            <Button label="Indietro" onClick={handlePrev} severity="secondary" icon="pi pi-arrow-left" className="prev-button" />
            <Button label={currentStep === 1 ? "Conferma" : "Avanti"} onClick={handleNext} icon="pi pi-arrow-right" iconPos="right" className="next-button" />
        </>
    );

    return (
        <div className="register-container">
            <div className="card">
                <div className="card-header">
                    <Card footer={footer} header={
                        <div className="p-grid p-align-center">
                            <div className="p-col">
                                <div>
                                    <span className="titleClass">{title}</span>
                                    <br />
                                    <div className="p-col-fixed">
                                        <span className="subTitleClass">{subTitle}</span>
                                        <img src={require('../assets/images/Logo_scritta.svg').default} alt="Logo" className="logo-image-col" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }>
                        <div style={{ width: '50rem' }}>
                            <Stepper ref={stepperRef}>
                                <StepperPanel header="Invio Emal">
                                    <div className="flex flex-column h-12rem">
                                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                            <div className="flex pt-4 justify-content-end">
                                                <div className="step-content-res">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="input-field-res"
                                                            placeholder="Email*"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Verifica Emal">
                                    <div className="flex flex-column h-12rem">
                                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                            <div className="flex pt-4 justify-content-end">
                                                <div className="step-content-res">
                                                    <div className="input-group">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StepperPanel>
                            </Stepper>

                        </div>
                    </Card>
                    <Toast ref={toast} className="custom-toast" position="bottom-left" />
                </div>

            </div>

        </div>

    );
}