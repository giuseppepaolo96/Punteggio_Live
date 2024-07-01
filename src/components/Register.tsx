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

export default function Register() {


  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [squadra, setSquadra] = useState('');
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

    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1);
    } else if (toast.current) {
      toast.current.show({ summary: labelConstant.email_inviata, detail: labelConstant.registrazione_completata });
    }
  };

  const handlePrev = () => {
    if (currentStep < 1) {
      navigate('/login');
    } else {
      stepperRef.current.prevCallback();
      setCurrentStep(prevStep => prevStep - 1);
    }

  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  const getHeaderContent = () => {
    let title, subTitle;
    switch (currentStep) {
      case 0:
        title = labelConstant.registrati_title;
        subTitle = labelConstant.insert_dati_registrazione_step_1;
        break;
      case 1:
        title = labelConstant.credenziali;
        subTitle = labelConstant.insert_credenziali;
        break;
      case 2:
        title = labelConstant.squadra;
        subTitle = labelConstant.insert_squadra;
        break;
      case 3:
        title = labelConstant.riepilogo;
        subTitle = labelConstant.verifica_riepilogo;
        break;
      default:
        title = labelConstant.riepilogo;
        subTitle = labelConstant.insert_dati_registrazione_step_1;
    }
    return { title, subTitle };
  };

  const { title, subTitle } = getHeaderContent();


  const footer = (
    <>
      <Button label="Indietro" onClick={handlePrev} severity="secondary" icon="pi pi-arrow-left" className="prev-button" />
      <Button label={currentStep === 3 ? "Conferma" : "Avanti"} onClick={handleNext} icon="pi pi-arrow-right" iconPos="right" className="next-button" />
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
                <StepperPanel header="Dati personali">
                  <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                      <div className="flex pt-4 justify-content-end">
                        <div className="step-content-res">
                          <div className="input-group">
                            <input
                              type="text"
                              className="input-field-res"
                              placeholder="Nome*"
                              value={firstName}
                              onChange={(e) => setFirstname(e.target.value)}
                              required
                            />
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              className="input-field-res"
                              placeholder="Cognome*"
                              value={lastName}
                              onChange={(e) => setLastname(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StepperPanel>
                <StepperPanel header="Credenziali">
                  <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
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
                        <div className="input-group">
                          <input
                            type="password"
                            className="input-field-res"
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </StepperPanel>
                <StepperPanel header="Squadra e categoria">
                  <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                      <div className="step-content-res">
                        <div className="input-group">
                          <Dropdown
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.value)}
                            options={cities} 
                            optionLabel="name" 
                            placeholder="Selezione la squadra"
                            panelClassName="custom-dropdown"
                            className="input-field-res" 
                          />
                        </div>
                        <div className="input-group">
                          <Dropdown
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.value)}
                            options={cities} 
                            optionLabel="name" 
                            placeholder="Seleziona la categoria"
                            panelClassName="custom-dropdown"
                            className="input-field-res" 
                          />
                          </div>
                      </div>
                    </div>
                  </div>
                </StepperPanel>

                <StepperPanel header="Riepilogo">
                  <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                      <div className="step-content-res">
                        <div className="input-group">
                          <input
                            type="text"
                            className="input-field-res"
                            placeholder="Riepilogo*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-group">
                          <input
                            type="password"
                            className="input-field-res"
                            placeholder="Prova*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
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