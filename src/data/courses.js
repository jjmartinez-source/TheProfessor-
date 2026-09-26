export const units = [
['Chemistry Foundations','The scientific method, matter, measurements and laboratory thinking',['Introduction to Chemistry','The Scientific Method','Matter and Its Properties','Measurements and Significant Figures']],
['Atomic Structure','Discover the particles and models that explain matter',['Atoms and Subatomic Particles','Isotopes and Atomic Mass','Atomic Models','Electron Configuration']],
['The Periodic Table','Find patterns in elements and predict their behavior',['Organizing the Elements','Periodic Trends','Families of Elements']],
['Chemical Bonding','Understand how atoms join to form substances',['Ionic Bonding','Covalent Bonding','Molecular Geometry','Intermolecular Forces']],
['Chemical Nomenclature','Learn the language of chemical compounds',['Naming Ionic Compounds','Naming Molecular Compounds','Writing Chemical Formulas']],
['Chemical Reactions','Describe and balance transformations of matter',['Reaction Types','Balancing Equations','Net Ionic Equations']],
['Stoichiometry','Use the mole to calculate chemical quantities',['The Mole','Molar Mass','Mole Ratios','Limiting Reactants','Percent Yield']],
['States of Matter and Gases','Explore the behavior of solids, liquids and gases',['Kinetic Molecular Theory','Gas Laws','Phase Changes']],
['Thermochemistry','Trace energy through chemical change',['Heat and Temperature','Enthalpy','Calorimetry','Hess’s Law']],
['Solutions and Equilibrium','Study dissolved substances and reversible reactions',['Solutions and Concentration','Solubility','Chemical Equilibrium','Le Châtelier’s Principle']],
['Acids, Bases and Electrochemistry','Connect reactions to pH and electron transfer',['Acids and Bases','pH and pOH','Redox Reactions','Electrochemical Cells']],
['Kinetics and Introductory Organic Chemistry','Explore reaction rates and carbon compounds',['Reaction Rates','Rate Laws','Catalysts','Carbon Bonding','Functional Groups']]
].map(([title,description,topics],i)=>({id:i+1,title,description,topics:topics.map((name,j)=>({id:`${i+1}.${j+1}`,name}))}));
// This is an initial curriculum outline, not a claim that source textbooks have been processed.
