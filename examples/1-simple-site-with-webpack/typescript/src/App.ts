import * as ReactHabitat from 'react-habitat';

// Our top level react components
import Banner       from './components/Banner';
import Featurette   from './components/Featurette';

class Main extends ReactHabitat.Bootstrapper {

	constructor() {

		super();

		// Create a new container builder
		const containerBuilder: ReactHabitat.IContainerBuilder = new ReactHabitat.ContainerBuilder();

		// Register our components that we want to expose to the DOM
		containerBuilder.register(() => Banner).as('RBanner')
		containerBuilder.register(() => Featurette).as('RFeaturette');

		// Set the DOM container
		this.setContainer(containerBuilder.build(), () => {
			// Optionally start a dom watcher to automatically wire up any new elements
			// that may be injected later (eg ajaxed HTML)
			// See dynamic.html for demo of this
			this.startWatcher();
		});

	}
}

export default new Main();