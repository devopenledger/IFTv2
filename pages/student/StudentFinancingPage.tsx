
import React, { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { MOCK_FINANCED_EQUIPMENT } from '../../constants';
import { FinancedEquipment, FinancingApplication } from '../../types';
import { CheckCircleIcon, UploadIcon } from '../../components/ui/Icons';
import { useStudentOutletContext } from './StudentLayout';

type Step = 1 | 2 | 3 | 4;

const Stepper: React.FC<{ currentStep: Step }> = ({ currentStep }) => {
    const { t } = useI18n();
    const steps = [
        { id: 1, label: t('financing_step1_equipment') },
        { id: 2, label: t('financing_step2_registration') },
        { id: 3, label: t('financing_step3_summary') },
    ];

    return (
        <nav className="flex items-center justify-center" aria-label="Progress">
            <ol className="flex items-center space-x-5">
                {steps.map((step, index) => (
                    <li key={step.id}>
                        {currentStep > step.id ? (
                             <div className="flex items-center text-green-600">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                                    <CheckCircleIcon className="h-5 w-5 text-white" />
                                </span>
                                <span className="ml-3 hidden text-sm font-medium sm:block">{step.label}</span>
                            </div>
                        ) : currentStep === step.id ? (
                            <div className="flex items-center text-green-600" aria-current="step">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600">
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                                </span>
                                <span className="ml-3 hidden text-sm font-medium sm:block">{step.label}</span>
                            </div>
                        ) : (
                            <div className="flex items-center text-gray-500">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300">
                                    <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                                </div>
                                <span className="ml-3 hidden text-sm font-medium sm:block">{step.label}</span>
                            </div>
                        )}
                        {index < steps.length - 1 && <div className="hidden sm:block w-16 border-t-2 border-gray-200" />}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export const StudentFinancingPage: React.FC = () => {
    const { t } = useI18n();
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [selectedEquipment, setSelectedEquipment] = useState<FinancedEquipment | null>(null);
    const [formData, setFormData] = useState({ age: '', income: '', addressProof: null });
    const [protocol, setProtocol] = useState<string | null>(null);
    const { setFinancingApplications } = useStudentOutletContext();

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4) as Step);
    const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1) as Step);
    
    const handleSubmit = () => {
        const protocolNumber = `IFT-FIN-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
        const newApplication: FinancingApplication = {
            id: `APP${Date.now()}`,
            protocolNumber,
            studentName: 'Aluno Teste', // Placeholder
            equipmentId: selectedEquipment!.id,
            status: 'pending',
            formData,
            createdAt: new Date().toISOString(),
        };
        setFinancingApplications(prev => [newApplication, ...prev]);
        setProtocol(protocolNumber);
        setCurrentStep(4);
    };

    const isUnder18 = formData.age !== '' && parseInt(formData.age, 10) < 18;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-3xl font-bold text-ift-dark-blue mb-8">{t('page_title_student_financing')}</h1>

            <div className="mb-12">
                <Stepper currentStep={currentStep} />
            </div>

            {currentStep === 1 && (
                <div>
                    {MOCK_FINANCED_EQUIPMENT.map(item => (
                        <div key={item.id} className={`grid md:grid-cols-2 gap-8 p-4 border rounded-lg ${selectedEquipment?.id === item.id ? 'border-green-500' : 'border-gray-200'}`}>
                            <img src={item.image} alt={item.name} className="w-full rounded-md" />
                            <div>
                                <h2 className="text-2xl font-bold">{item.name}</h2>
                                <div className="my-4 space-y-2 text-sm">
                                    <div className="flex justify-between"><span className="text-gray-600">{t('financing_price')}:</span> <span className="font-semibold">R$ {item.price.toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">{t('financing_subsidy')}:</span> <span className="font-semibold text-green-600">- R$ {item.subsidy.toFixed(2)}</span></div>
                                    <div className="flex justify-between text-lg border-t pt-2 mt-2"><span className="font-bold">{t('financing_final_price')}:</span> <span className="font-bold text-green-600">R$ {(item.price - item.subsidy).toFixed(2)}</span></div>
                                </div>
                                <h3 className="font-bold mt-6 mb-2">{t('financing_specs')}</h3>
                                <ul className="text-xs space-y-1 text-gray-500">
                                    {item.specs.map(spec => <li key={spec.key}><strong>{spec.key}:</strong> {spec.value}</li>)}
                                </ul>
                                <button onClick={() => setSelectedEquipment(item)} className={`w-full mt-6 py-3 rounded-md font-semibold ${selectedEquipment?.id === item.id ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                                    {selectedEquipment?.id === item.id ? t('financing_equipment_selected') : t('financing_select_equipment')}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right mt-6">
                        <button onClick={handleNext} disabled={!selectedEquipment} className="px-6 py-2 bg-ift-light-green text-black font-semibold rounded-md hover:opacity-90 disabled:opacity-50">
                            {t('financing_next_step')}
                        </button>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div>
                    <h2 className="text-xl font-bold mb-4">{t('financing_registration_title')}</h2>
                    <div className="space-y-4 max-w-lg mx-auto">
                        <div>
                            <label htmlFor="age">{t('financing_form_age')}</label>
                            <input type="number" id="age" value={formData.age} onChange={(e) => setFormData(p => ({...p, age: e.target.value}))} className="w-full mt-1 p-2 border rounded-md" />
                        </div>
                        {isUnder18 && (
                             <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
                                <p className="text-yellow-700">{t('financing_form_under_18_message')}</p>
                                <h3 className="font-bold mt-4 mb-2">{t('financing_form_guardian_title')}</h3>
                                {/* Add guardian fields here */}
                            </div>
                        )}
                         <div>
                            <label htmlFor="income">{t('financing_form_income')}</label>
                            <input type="number" id="income" value={formData.income} onChange={(e) => setFormData(p => ({...p, income: e.target.value}))} className="w-full mt-1 p-2 border rounded-md" />
                        </div>
                        <div>
                            <label>{t('financing_form_address_proof')}</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="text-sm text-gray-600">{t('financing_form_upload')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <button onClick={handleBack} className="px-6 py-2 bg-gray-200 font-semibold rounded-md hover:bg-gray-300">{t('financing_back_step')}</button>
                        <button onClick={handleNext} className="px-6 py-2 bg-ift-light-green text-black font-semibold rounded-md hover:opacity-90">{t('financing_next_step')}</button>
                    </div>
                </div>
            )}

            {currentStep === 3 && selectedEquipment && (
                <div>
                     <h2 className="text-xl font-bold mb-4">{t('financing_summary_title')}</h2>
                     <div className="space-y-4">
                         <h3 className="font-semibold">{t('financing_summary_equipment')}: {selectedEquipment.name}</h3>
                         <h3 className="font-semibold">{t('financing_summary_conditions')}:</h3>
                         <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                             <li>{t('financing_summary_condition1')}</li>
                             <li>{t('financing_summary_condition2')}</li>
                             <li>{t('financing_summary_condition3')}</li>
                         </ul>
                     </div>
                     <div className="flex justify-between mt-6">
                        <button onClick={handleBack} className="px-6 py-2 bg-gray-200 font-semibold rounded-md hover:bg-gray-300">{t('financing_back_step')}</button>
                        <button onClick={handleSubmit} className="px-6 py-2 bg-ift-light-green text-black font-semibold rounded-md hover:opacity-90">{t('financing_cta')}</button>
                    </div>
                </div>
            )}
            
            {currentStep === 4 && protocol && (
                <div className="text-center py-12">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">{t('financing_protocol_title')}</h2>
                    <p className="text-gray-600 mt-2 mb-6">{t('financing_protocol_subtitle')}</p>
                    <p>{t('financing_protocol_number')}: <span className="font-mono bg-gray-100 p-2 rounded-md">{protocol}</span></p>
                    <button onClick={() => setCurrentStep(1)} className="mt-8 px-6 py-2 bg-ift-light-green text-black font-semibold rounded-md hover:opacity-90">
                        {t('financing_protocol_back_to_dash')}
                    </button>
                </div>
            )}
        </div>
    );
};
