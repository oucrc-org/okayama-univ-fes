import Link from "next/link";

// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
// https://qiita.com/jesuissuyaa/items/f9cb9343057de306ff25
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#features
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

export default function Footer() {
    return (
        <footer className="text-center text-white p-16 bg-blue-900">
            <div className="flex justify-center">
                    <a href = "https://twitter.com/gakusai_2020_"><FontAwesomeIcon icon={['fab', 'twitter']} width="30" className="mx-5"/></a>
                    <a href = "https://www.instagram.com/gakusai_2020_/"><FontAwesomeIcon icon={['fab', 'instagram']} width="30" className="mx-5"/></a>
            </div>
            <div className="p-4">
                <p className="p-4">
                    <Link href="/policy">
                        <a className="p-2 text-xs">サイトポリシー</a>
                    </Link>
                </p>
                <p>
                    <Link href="//oucrc.net">
                        <a className="p-2 text-center text-xs" target="_blank" rel="noopener noreferrer">制作：電子計算機研究会</a>
                    </Link>
                </p>
            </div>
        </footer>
    )
}